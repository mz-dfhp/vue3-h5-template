import type { Ref } from 'vue'
import { ref } from 'vue'

/** 分页请求参数 */
export interface PageParams {
  page: number
  pageSize: number
}

/** 分页请求函数的标准返回结构 */
export interface PageResult<T> {
  list: T[]
  total: number
}

/** 分页请求函数类型 */
export type FetchFn<T> = (params: PageParams) => Promise<PageResult<T>>

/** useListPagination 入参 */
export interface ListPaginationOptions<T> {
  fetchFn: FetchFn<T>
  pageSize?: number
}

/**
 * 列表分页 hook（下拉刷新 + 上拉加载）
 * @param options.fetchFn - 分页请求函数，由调用方传入
 * @param options.pageSize - 每页数量，默认 10
 */
export function useListPagination<T>({ fetchFn, pageSize = 10 }: ListPaginationOptions<T>) {
  /** 当前页码 */
  const currentPage = ref(1)

  /** 列表数据 */
  const list = ref([]) as Ref<T[]>

  /** 下拉刷新状态 */
  const isRefreshing = ref(false)

  /** 上拉加载状态 */
  const isLoading = ref(false)

  /** 是否全部加载完毕 */
  const isFinished = ref(false)

  /**
   * 加载列表数据
   * @param isRefresh - 是否为刷新操作，刷新时重置页码
   */
  async function loadData(isRefresh: boolean) {
    if (isRefresh) {
      currentPage.value = 1
    }

    try {
      const { list: newItems, total } = await fetchFn({ page: currentPage.value, pageSize })

      if (isRefresh) {
        list.value = newItems
      }
      else {
        list.value.push(...newItems)
      }

      if (list.value.length >= total) {
        isFinished.value = true
      }
      else {
        currentPage.value++
      }
    }
    catch (error) {
      console.error('列表加载失败', error)
    }
    finally {
      isRefreshing.value = false
      isLoading.value = false
    }
  }

  /**
   * 下拉刷新回调
   */
  async function onRefresh() {
    isFinished.value = false
    await loadData(true)
  }

  /**
   * 上拉加载更多回调
   */
  async function onLoadMore() {
    await loadData(false)
  }

  return {
    list,
    isRefreshing,
    isLoading,
    isFinished,
    onRefresh,
    onLoadMore,
  }
}
