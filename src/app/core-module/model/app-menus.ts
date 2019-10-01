
 export class Menu {
     title: string;
     link: string;
     showMenu: boolean;
     showSubMenu: boolean;
     subMenus: Array<SubMenu>;
 }

 class SubMenu {
    title: string;
    link: string;
    showSubMenuItem: boolean;
 }

 const adminMenus: Menu[] = [
  {
    title: ' ',
    link: '',
    showMenu: true,
    showSubMenu: false,
    subMenus: []
  },
];

 const usersMenu: Menu[] = [
  {
    title: 'ViewContact',
    link: adminMenus[0].link,
    showMenu: true,
    showSubMenu: false,
    subMenus: []
  },
];

 export class AppMenus {
    getMenus(role: string): Menu[] {
      if (role == 'Admin') {
        return adminMenus as Menu[];

      } else {
        return usersMenu as Menu[];
      }
    }
}
