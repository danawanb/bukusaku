const today = new Date().getHours()+7;


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
  url: 'https://bukusaku.vercel.app/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'danawanb', // Usually your GitHub org/user name.
  projectName: 'bukusaku', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Logo DSP',
        src: 'img/logodsps.png',
      },
      links: [
        {
          to: 'docs/dasar1',
          activeBasePath: 'docs',
          label: 'Buku Saku',
          position: 'left',
        },
        {to: 'blog', label: 'Pengumuman', position: 'left'},
        {to: 'todo', label: 'Jadwal', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Subdit SPKPP, Direktorat Sistem Perbendaharaan.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        todo: {
         //////
        }
      },
    ],
  ],
};
