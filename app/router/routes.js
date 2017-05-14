import HomeView from '../views/home/home.js'
import DocsView from '../views/docs/docs.js'
import BlogView from '../views/blog/blog.js'

import OverviewView from '../views/overview/overview.js'
import OverviewStartView from '../views/overview/start.js'
import OverviewCustomizeView from '../views/overview/customize.js'
import OverviewClassesView from '../views/overview/classes.js'
import OverviewModularView from '../views/overview/modular.js'
import OverviewResponsivenessView from '../views/overview/responsiveness.js'
import OverviewFunctionsView from '../views/overview/functions.js'
import OverviewVariablesView from '../views/overview/variables.js'
import OverviewMixinsView from '../views/overview/mixins.js'

import ModifiersView from '../views/modifiers/modifiers.js'
import ModifiersSyntaxView from '../views/modifiers/syntax.js'
import ModifiersHelpersView from '../views/modifiers/helpers.js'
import ModifiersResponsiveHelpersView from '../views/modifiers/responsive-helpers.js'

import GridView from '../views/grid/grid.js'
import GridColumnsView from '../views/grid/columns.js'
import GridTilesView from '../views/grid/tiles.js'

import ElementsView from '../views/elements/elements.js'
import ElementsBoxView from '../views/elements/box.js'
import ElementsButtonView from '../views/elements/button.js'
import ElementsContentView from '../views/elements/content.js'
import ElementsDeleteView from '../views/elements/delete.js'
import ElementsFormView from '../views/elements/form.js'
import ElementsIconView from '../views/elements/icon.js'
import ElementsImageView from '../views/elements/image.js'
import ElementsNotificationView from '../views/elements/notification.js'
import ElementsProgressView from '../views/elements/progress.js'
import ElementsTableView from '../views/elements/table.js'
import ElementsTagView from '../views/elements/tag.js'
import ElementsTitleView from '../views/elements/title.js'

import ComponentsView from '../views/components/components.js'
import ComponentsCardView from '../views/components/card.js'
import ComponentsLevelView from '../views/components/level.js'
import ComponentsMediaObjectView from '../views/components/media-object.js'
import ComponentsMenuView from '../views/components/menu.js'
import ComponentsMessageView from '../views/components/message.js'
import ComponentsModalView from '../views/components/modal.js'
import ComponentsNavView from '../views/components/nav.js'
import ComponentsPaginationView from '../views/components/pagination.js'
import ComponentsPanelView from '../views/components/panel.js'
import ComponentsTabsView from '../views/components/tabs.js'

import LayoutsView from '../views/layout/layout.js'
import LayoutsContainerView from '../views/layout/container.js'
import LayoutsHeroView from '../views/layout/hero.js'
import LayoutsSectionView from '../views/layout/section.js'
import LayoutsFoooterView from '../views/layout/footer.js'

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
