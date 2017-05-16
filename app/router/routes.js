import HomeView from '../views/home/home.vue'
import DocsView from '../views/docs/docs.vue'
import BlogView from '../views/blog/blog.vue'

import OverviewView from '../views/overview/overview.vue'
import OverviewStartView from '../views/overview/start.vue'
import OverviewCustomizeView from '../views/overview/customize.vue'
import OverviewClassesView from '../views/overview/classes.vue'
import OverviewModularView from '../views/overview/modular.vue'
import OverviewResponsivenessView from '../views/overview/responsiveness.vue'
import OverviewFunctionsView from '../views/overview/functions.vue'
import OverviewVariablesView from '../views/overview/variables.vue'
import OverviewMixinsView from '../views/overview/mixins.vue'

import ModifiersView from '../views/modifiers/modifiers.vue'
import ModifiersSyntaxView from '../views/modifiers/syntax.vue'
import ModifiersHelpersView from '../views/modifiers/helpers.vue'
import ModifiersResponsiveHelpersView from '../views/modifiers/responsive-helpers.vue'

import GridView from '../views/grid/grid.vue'
import GridColumnsView from '../views/grid/columns.vue'
import GridTilesView from '../views/grid/tiles.vue'

import ElementsView from '../views/elements/elements.vue'
import ElementsBoxView from '../views/elements/box.vue'
import ElementsButtonView from '../views/elements/button.vue'
import ElementsContentView from '../views/elements/content.vue'
import ElementsDeleteView from '../views/elements/delete.vue'
import ElementsFormView from '../views/elements/form.vue'
import ElementsIconView from '../views/elements/icon.vue'
import ElementsImageView from '../views/elements/image.vue'
import ElementsNotificationView from '../views/elements/notification.vue'
import ElementsProgressView from '../views/elements/progress.vue'
import ElementsTableView from '../views/elements/table.vue'
import ElementsTagView from '../views/elements/tag.vue'
import ElementsTitleView from '../views/elements/title.vue'

import ComponentsView from '../views/components/components.vue'
import ComponentsCardView from '../views/components/card.vue'
import ComponentsLevelView from '../views/components/level.vue'
import ComponentsMediaObjectView from '../views/components/media-object.vue'
import ComponentsMenuView from '../views/components/menu.vue'
import ComponentsMessageView from '../views/components/message.vue'
import ComponentsModalView from '../views/components/modal.vue'
import ComponentsNavView from '../views/components/nav.vue'
import ComponentsPaginationView from '../views/components/pagination.vue'
import ComponentsPanelView from '../views/components/panel.vue'
import ComponentsTabsView from '../views/components/tabs.vue'

import LayoutsView from '../views/layout/layout.vue'
import LayoutsContainerView from '../views/layout/container.vue'
import LayoutsHeroView from '../views/layout/hero.vue'
import LayoutsSectionView from '../views/layout/section.vue'
import LayoutsFoooterView from '../views/layout/footer.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/docs',
    component: DocsView,
    children: [
      {
        path: '/overview',
        component: OverviewView,
        children: [
          {
            path: '/start',
            component: OverviewStartView
          },
          {
            path: '/customize',
            component: OverviewCustomizeView
          },
          {
            path: '/classes',
            component: OverviewClassesView
          },
          {
            path: '/modular',
            component: OverviewModularView
          },
          {
            path: '/responsiveness',
            component: OverviewResponsivenessView
          },
          {
            path: '/functions',
            component: OverviewFunctionsView
          },
          {
            path: '/variables',
            component: OverviewVariablesView
          },
          {
            path: '/mixins',
            component: OverviewMixinsView
          }
        ]
      },
      {
        path: '/modifiers',
        component: ModifiersView,
        children: [
          {
            path: '/syntax',
            component: ModifiersSyntaxView
          },
          {
            path: '/helpers'
            component: ModifiersHelpersView
          },
          {
            path: '/responsive-helpers'
            component: ModifiersResponsiveHelpersView
          }
        ]
      },
      {
        path: '/grid',
        component: GridView,
        children: [
          {
            path: '/columns'
            component: GridColumnsView
          },
          {
            path: '/tiles'
            component: GridTilesView
          }
        ]
      },
      {
        path: '/elements',
        component: ElementsView,
        children: [
          {
            path: '/box'
            component: ElementsBoxView
          },
          {
            path: '/button'
            component: ElementsButtonView
          },
          {
            path: '/content'
            component: ElementsContentView
          },
          {
            path: '/delete'
            component: ElementsDeleteView
          },
          {
            path: '/form'
            component: ElementsFormView
          },
          {
            path: '/icon'
            component: ElementsIconView
          },
          {
            path: '/image'
            component: ElementsImageView
          },
          {
            path: '/notification'
            component: ElementsNotificationView
          },
          {
            path: '/progress'
            component: ElementsProgressView
          },
          {
            path: '/table'
            component: ElementsTableView
          },
          {
            path: '/tag'
            component: ElementsTagView
          },
          {
            path: '/title'
            component: ElementsTitleView
          }
        ]
      },
      {
        path: '/components',
        component: ComponentsView,
        children: [
          {
            path: '/card'
            component: ComponentsCardView
          },
          {
            path: '/level'
            component: ComponentsLevelView
          }
          {
            path: '/media-object'
            component: ComponentsMediaObjectView
          }
          {
            path: '/menu'
            component: ComponentsMenuView
          }
          {
            path: '/message'
            component: ComponentsMessageView
          }
          {
            path: '/modal'
            component: ComponentsModalView
          }
          {
            path: '/nav'
            component: ComponentsNavView
          }
          {
            path: '/pagination'
            component: ComponentsPaginationView
          }
          {
            path: '/panel'
            component: ComponentsPanelView
          }
          {
            path: '/tabs'
            component: ComponentsTabsView
          }
        ]
      },
      {
        path: '/layout',
        component: LayoutsView,
        children: [
          {
            path: '/container',
            component: LayoutsContainerView
          },
          {
            path: '/hero',
            component: LayoutsHeroView
          },
          {
            path: '/section',
            component: LayoutsSectionView
          },
          {
            path: '/footer',
            component: LayoutsFooterView
          }
        ]
      }
    ]
  },
  {
    path: '/blog',
    component: BlogView
  }
]

export default routes;
