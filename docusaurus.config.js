const today = new Date().getHours();
let selamat = () => {

  if (today < 11) {
   return "Selamat Pagi"
  } else if (today < 15) {
    return "Selamat Siang"
  } else if (today <= 18) {
    return "Selamat Sore"
  } else {
    return "Selamat Malam"
  }
}

module.exports = {
  title: `${selamat()}`,
  tagline: 'Nasi goreng adalah sebuah konsumsi berupa nasi yang digoreng dan diaduk dalam minyak goreng atau margarin, biasanya ditambah kecap manis, bawang merah, bawang putih, asam jawa, lada dan bumbu-bumbu lainnya, seperti telur, ayam, dan kerupuk.',
  url: 'https://bukusaku.vercel.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'danawanb', // Usually your GitHub org/user name.
  projectName: 'bukusaku', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Logo DSP',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Buku Saku',
          position: 'left',
        },
        {to: 'jadwal', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
