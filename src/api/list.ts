import type { PageParams, PageResult } from '@/composables/useListPagination'

/** 列表项数据结构 */
export interface ListItem {
  id: number
  title: string
  desc: string
  tag: string
  time: string
}

const MOCK_TOTAL = 35

/**
 * 获取列表数据（mock）
 * @param params - 分页参数
 * @param params.page - 页码
 * @param params.pageSize - 每页数量
 */
export function getListApi({ page, pageSize }: PageParams): Promise<PageResult<ListItem>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * pageSize
      const count = Math.min(pageSize, MOCK_TOTAL - start)
      const tags = ['热门', '推荐', '新品']
      const list: ListItem[] = Array.from({ length: count }, (_, index) => {
        const itemIndex = start + index + 1
        return {
          id: itemIndex,
          title: `列表项 ${itemIndex}`,
          desc: `这是第 ${itemIndex} 条数据的描述内容，用于展示列表样式效果`,
          tag: tags[itemIndex % tags.length],
          time: new Date().toLocaleDateString('zh-CN'),
        }
      })
      resolve({ list, total: MOCK_TOTAL })
    }, 800)
  })
}
