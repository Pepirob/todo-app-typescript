export const TODO_FILTERS = {
  ALL: 'All',
  ACTIVE: 'Active',
  COMPLETED: 'Completed'
} as const

export const FILTER_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    href: `/?filter=${TODO_FILTERS.ALL}`,
    literal: TODO_FILTERS.ALL
  },
  [TODO_FILTERS.ACTIVE]: {
    href: `/?filter=${TODO_FILTERS.ACTIVE}`,
    literal: TODO_FILTERS.ACTIVE
  },
  [TODO_FILTERS.COMPLETED]: {
    href: `/?filter=${TODO_FILTERS.COMPLETED}`,
    literal: TODO_FILTERS.COMPLETED
  }
} as const
