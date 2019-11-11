interface engine {
  name: string;
  value: string;
}

export const engineList: engine[] = [
  {
    name: 'bing',
    value: '//www.bing.com/search?q=',
  },
  {
    name: '360',
    value: 'https://www.so.com/s?q=',
  },
  {
    name: 'sogou',
    value: 'https://www.sogou.com/web?query=',
  },
  {
    name: 'baidu',
    value: 'https://www.baidu.com/s?wd=',
  },
  {
    name: 'google',
    value: 'https://www.google.com/#q=',
  },
  {
    name: 'yahoo',
    value: 'https://search.yahoo.com/search?p=',
  },
];
