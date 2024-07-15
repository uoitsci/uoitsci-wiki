export const links = [
    {
      name: "About",
      submenu: false,
      link: "/about"
    },
    {
      name: "3D Printing",
      submenu: true,
      sublinks: [
        {
          Head: "3D Printer",
          link: "/3dprinting/printer_info"
        },
        {
          Head: "Materials",
          sublink: [
            { name: "Materials Information", link: "/3dprinting/materials_info" },
            { name: "Filaments Inventory", link: "/3dprinting/materials_inv"}
          ]
        }
      ]
    },
  ];