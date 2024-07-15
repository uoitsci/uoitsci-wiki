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
          link: "/3dprinter"
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
    {
        name: "Men",
        submenu: true,
        sublinks: [
          {
            Head: "Topwear",
            sublink: [
              { name: "T-shirt", link: "/" },
              { name: "Casual shirts", link: "/" },
              { name: "formal shirts", link: "/" },
              { name: "formal shirts", link: "/" },
              { name: "formal shirts", link: "/" },
            ],
          },
          {
            Head: "Bottomwear",
            sublink: [
              { name: "T-shirt", link: "/" },
              { name: "Casual shirts", link: "/" },
              { name: "formal shirts", link: "/" },
            ],
          },
          {
            Head: "Innerwear",
            link: "/"
          },
          {
            Head: "Innerwear",
            sublink: [
              { name: "T-shirt", link: "/" },
              { name: "Casual shirts", link: "/" },
              { name: "formal shirts", link: "/" },
              { name: "formal shirts", link: "/" },
              { name: "formal shirts", link: "/" },
            ],
          },
        ],
      },
    {
      name: "Printing",
      submenu: true,
      sublinks: [
        {
          Head: "Printing",
          link: "/printing"
        },
        {
          Head: "3D Printing",
          link: "/printing/3dprinting"
        },
        {
          Head: "Windows / MacOS",
          link: "/printing/windows"
        },
        {
          Head: "Linux",
          sublink: [
            { name: "Ubuntu / Debian", link: "/printing/linux/ubuntu" },
            { name: "Fedora", link: "/printing/linux/fedora" },
            { name: "Arch-Linux", link: "/printing/linux/arch" },
          ],
        },
      ],
    },
    {
      name: "Five Sub-links",
      submenu: true,
      sublinks: [
        {
          Head: "Topwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            
          ],
        },
        {
          Head: "Bottomwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "Innerwear",
          sublink: [
            { name: "T-shirt", link: "/" },
          ],
        },
        {
          Head: "Sleepwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "Footwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            
          ],
        },
      ],
    },
    {
      name: "Single Links",
      submenu: true,
      sublinks: [
        {
          Head: "Item 1",
          link: "/"
        },
        {
          Head: "Item 2",
          link: "/"
        },
      ]
    },
  ];