const products = [
  {
    _id: "1",
    name: "Nike Zoom Fly 4",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/82a66871-c6f7-4b13-be64-ba2bb3214658/zoom-fly-4-road-running-shoes-Mw5cqb.png",

    price: 89.99,
    prePrice: 100,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: "2",
    name: "Nike Air Max 95 ",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b1e6edcf-6ba9-48fb-83f1-d831736be852/air-max-95-shoes-hDKSVN.png",

    price: 599.99,
    prePrice: 700,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: "3",
    name: "Nike Blazer Mid '77 EMB",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ef7dcf5f-d1b6-49ed-9a45-658b4ed2fd32/blazer-mid-77-emb-shoe-P61Kxj.png",

    price: 929.99,
    prePrice: 1500,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: "4",
    name: "Nike Air Force 1",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-shoe-pXTXQ8.png",

    price: 399.99,
    prePrice: 500,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "5",
    name: "Nike Air Zoom Pegasus 38",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/19ace622-7e4a-4427-b606-79cc1aa1418e/air-zoom-pegasus-38-road-running-shoes-WcDQ9W.png",

    price: 49.99,
    prePrice: 100,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "6",
    name: "Nike React Miler 2 By You",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7a695bd8-f12a-4026-8e3d-a78a924487c3/custom-nike-react-miler-2-by-you.png",

    price: 29.99,
    prePrice: 300,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: "7",
    name: "Air Jordan XXXVI 'First Light'",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d5e688-dc3e-4e73-bfb5-06a26f68598b/air-jordan-xxxvi-first-light-basketball-shoes-RxPF7J.png",

    price: 399.99,
    prePrice: 500,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "8",
    name: "Nike Air Zoom Alphafly",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e361b068-3970-4609-b29d-6f0f09f129a1/air-zoom-alphafly-next-road-racing-shoes-KQKNTf.png",

    price: 49.99,
    prePrice: 100,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "9",
    name: "Air Jordan XXXV Low Quai",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/607248c9-08da-4991-b216-5db7f5e4a81d/air-jordan-xxxv-low-quai-54-basketball-shoe-lnn1kv.png",

    price: 29.99,
    prePrice: 110,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: "10",
    name: "Nike Blazer Mid '77 Jumbo",
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3eb1a8f4-2bc9-470d-afd2-943fbeabc61c/blazer-mid-77-jumbo-shoes-3LXxgJ.png",

    price: 29.99,
    prePrice: 110,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: "11",
    name: "Nike Zoom Fly 4",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/82a66871-c6f7-4b13-be64-ba2bb3214658/zoom-fly-4-road-running-shoes-Mw5cqb.png",

    price: 89.99,
    prePrice: 100,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: "12",
    name: "Nike Air Max 95 ",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b1e6edcf-6ba9-48fb-83f1-d831736be852/air-max-95-shoes-hDKSVN.png",

    price: 599.99,
    prePrice: 700,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: "13",
    name: "Nike Blazer Mid '77 EMB",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ef7dcf5f-d1b6-49ed-9a45-658b4ed2fd32/blazer-mid-77-emb-shoe-P61Kxj.png",

    price: 929.99,
    prePrice: 1500,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: "14",
    name: "Nike Air Force 1",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-shoe-pXTXQ8.png",

    price: 399.99,
    prePrice: 500,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "15",
    name: "Nike Air Zoom Pegasus 38",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/19ace622-7e4a-4427-b606-79cc1aa1418e/air-zoom-pegasus-38-road-running-shoes-WcDQ9W.png",

    price: 49.99,
    prePrice: 100,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "16",
    name: "Nike React Miler 2 By You",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7a695bd8-f12a-4026-8e3d-a78a924487c3/custom-nike-react-miler-2-by-you.png",

    price: 29.99,
    prePrice: 300,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: "17",
    name: "Air Jordan XXXVI 'First Light'",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d5e688-dc3e-4e73-bfb5-06a26f68598b/air-jordan-xxxvi-first-light-basketball-shoes-RxPF7J.png",

    price: 399.99,
    prePrice: 500,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "18",
    name: "Nike Air Zoom Alphafly",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e361b068-3970-4609-b29d-6f0f09f129a1/air-zoom-alphafly-next-road-racing-shoes-KQKNTf.png",

    price: 49.99,
    prePrice: 100,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "19",
    name: "Air Jordan XXXV Low Quai",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/607248c9-08da-4991-b216-5db7f5e4a81d/air-jordan-xxxv-low-quai-54-basketball-shoe-lnn1kv.png",

    price: 29.99,
    prePrice: 110,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: "20",
    name: "Nike Blazer Mid '77 Jumbo",
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3eb1a8f4-2bc9-470d-afd2-943fbeabc61c/blazer-mid-77-jumbo-shoes-3LXxgJ.png",

    price: 29.99,
    prePrice: 110,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: "21",
    name: "Nike Zoom Fly 4",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/82a66871-c6f7-4b13-be64-ba2bb3214658/zoom-fly-4-road-running-shoes-Mw5cqb.png",

    price: 89.99,
    prePrice: 100,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: "22",
    name: "Nike Air Max 95 ",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b1e6edcf-6ba9-48fb-83f1-d831736be852/air-max-95-shoes-hDKSVN.png",

    price: 599.99,
    prePrice: 700,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: "23",
    name: "Nike Blazer Mid '77 EMB",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ef7dcf5f-d1b6-49ed-9a45-658b4ed2fd32/blazer-mid-77-emb-shoe-P61Kxj.png",

    price: 929.99,
    prePrice: 1500,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: "24",
    name: "Nike Air Force 1",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-shoe-pXTXQ8.png",

    price: 399.99,
    prePrice: 500,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "25",
    name: "Nike Air Zoom Pegasus 38",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/19ace622-7e4a-4427-b606-79cc1aa1418e/air-zoom-pegasus-38-road-running-shoes-WcDQ9W.png",

    price: 49.99,
    prePrice: 100,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "26",
    name: "Nike React Miler 2 By You",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7a695bd8-f12a-4026-8e3d-a78a924487c3/custom-nike-react-miler-2-by-you.png",

    price: 29.99,
    prePrice: 300,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: "27",
    name: "Air Jordan XXXVI 'First Light'",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d5e688-dc3e-4e73-bfb5-06a26f68598b/air-jordan-xxxvi-first-light-basketball-shoes-RxPF7J.png",

    price: 399.99,
    prePrice: 500,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "28",
    name: "Nike Air Zoom Alphafly",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e361b068-3970-4609-b29d-6f0f09f129a1/air-zoom-alphafly-next-road-racing-shoes-KQKNTf.png",

    price: 49.99,
    prePrice: 100,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "29",
    name: "Air Jordan XXXV Low Quai",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/607248c9-08da-4991-b216-5db7f5e4a81d/air-jordan-xxxv-low-quai-54-basketball-shoe-lnn1kv.png",

    price: 29.99,
    prePrice: 110,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: "30",
    name: "Nike Blazer Mid '77 Jumbo",
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3eb1a8f4-2bc9-470d-afd2-943fbeabc61c/blazer-mid-77-jumbo-shoes-3LXxgJ.png",

    price: 29.99,
    prePrice: 110,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: "31",
    name: "Nike Zoom Fly 4",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/82a66871-c6f7-4b13-be64-ba2bb3214658/zoom-fly-4-road-running-shoes-Mw5cqb.png",

    price: 89.99,
    prePrice: 100,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: "32",
    name: "Nike Air Max 95 ",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b1e6edcf-6ba9-48fb-83f1-d831736be852/air-max-95-shoes-hDKSVN.png",

    price: 599.99,
    prePrice: 700,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: "33",
    name: "Nike Blazer Mid '77 EMB",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ef7dcf5f-d1b6-49ed-9a45-658b4ed2fd32/blazer-mid-77-emb-shoe-P61Kxj.png",

    price: 929.99,
    prePrice: 1500,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: "34",
    name: "Nike Air Force 1",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-shoe-pXTXQ8.png",

    price: 399.99,
    prePrice: 500,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "35",
    name: "Nike Air Zoom Pegasus 38",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/19ace622-7e4a-4427-b606-79cc1aa1418e/air-zoom-pegasus-38-road-running-shoes-WcDQ9W.png",

    price: 49.99,
    prePrice: 100,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "36",
    name: "Nike React Miler 2 By You",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7a695bd8-f12a-4026-8e3d-a78a924487c3/custom-nike-react-miler-2-by-you.png",

    price: 29.99,
    prePrice: 300,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: "37",
    name: "Air Jordan XXXVI 'First Light'",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d5e688-dc3e-4e73-bfb5-06a26f68598b/air-jordan-xxxvi-first-light-basketball-shoes-RxPF7J.png",

    price: 399.99,
    prePrice: 500,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "38",
    name: "Nike Air Zoom Alphafly",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e361b068-3970-4609-b29d-6f0f09f129a1/air-zoom-alphafly-next-road-racing-shoes-KQKNTf.png",

    price: 49.99,
    prePrice: 100,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "39",
    name: "Air Jordan XXXV Low Quai",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/607248c9-08da-4991-b216-5db7f5e4a81d/air-jordan-xxxv-low-quai-54-basketball-shoe-lnn1kv.png",

    price: 29.99,
    prePrice: 110,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: "40",
    name: "Nike Blazer Mid '77 Jumbo",
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3eb1a8f4-2bc9-470d-afd2-943fbeabc61c/blazer-mid-77-jumbo-shoes-3LXxgJ.png",

    price: 29.99,
    prePrice: 110,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: "41",
    name: "Nike Zoom Fly 4",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/82a66871-c6f7-4b13-be64-ba2bb3214658/zoom-fly-4-road-running-shoes-Mw5cqb.png",

    price: 89.99,
    prePrice: 100,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: "42",
    name: "Nike Air Max 95 ",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b1e6edcf-6ba9-48fb-83f1-d831736be852/air-max-95-shoes-hDKSVN.png",

    price: 599.99,
    prePrice: 700,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: "43",
    name: "Nike Blazer Mid '77 EMB",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ef7dcf5f-d1b6-49ed-9a45-658b4ed2fd32/blazer-mid-77-emb-shoe-P61Kxj.png",

    price: 929.99,
    prePrice: 1500,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: "44",
    name: "Nike Air Force 1",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-shoe-pXTXQ8.png",

    price: 399.99,
    prePrice: 500,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "45",
    name: "Nike Air Zoom Pegasus 38",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/19ace622-7e4a-4427-b606-79cc1aa1418e/air-zoom-pegasus-38-road-running-shoes-WcDQ9W.png",

    price: 49.99,
    prePrice: 100,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "46",
    name: "Nike React Miler 2 By You",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7a695bd8-f12a-4026-8e3d-a78a924487c3/custom-nike-react-miler-2-by-you.png",

    price: 29.99,
    prePrice: 300,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: "47",
    name: "Air Jordan XXXVI 'First Light'",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d5e688-dc3e-4e73-bfb5-06a26f68598b/air-jordan-xxxvi-first-light-basketball-shoes-RxPF7J.png",

    price: 399.99,
    prePrice: 500,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "48",
    name: "Nike Air Zoom Alphafly",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e361b068-3970-4609-b29d-6f0f09f129a1/air-zoom-alphafly-next-road-racing-shoes-KQKNTf.png",

    price: 49.99,
    prePrice: 100,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "49",
    name: "Air Jordan XXXV Low Quai",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/607248c9-08da-4991-b216-5db7f5e4a81d/air-jordan-xxxv-low-quai-54-basketball-shoe-lnn1kv.png",

    price: 29.99,
    prePrice: 110,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: "50",
    name: "Nike Blazer Mid '77 Jumbo",
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3eb1a8f4-2bc9-470d-afd2-943fbeabc61c/blazer-mid-77-jumbo-shoes-3LXxgJ.png",

    price: 29.99,
    prePrice: 110,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: "51",
    name: "Air Jordan XXXVI 'First Light'",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d5e688-dc3e-4e73-bfb5-06a26f68598b/air-jordan-xxxvi-first-light-basketball-shoes-RxPF7J.png",

    price: 399.99,
    prePrice: 500,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "52",
    name: "Nike Blazer Mid '77 Jumbo",
    image:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3eb1a8f4-2bc9-470d-afd2-943fbeabc61c/blazer-mid-77-jumbo-shoes-3LXxgJ.png",

    price: 49.99,
    prePrice: 100,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "53",
    name: "Nike Air Zoom Pegasus 38 Shield",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d5bc11d4-65e7-4254-a896-ee239ee280f5/air-zoom-pegasus-38-shield-weatherised-road-running-shoes-fJcx8Z.png",

    price: 29.99,
    prePrice: 110,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: "54",
    name: "Nike Air Max 90",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/65d02ab6-19ed-4635-81f2-569be3333ae4/air-max-90-shoes-P5Pf0w.png",

    price: 29.99,
    prePrice: 110,
    rating: 4,
    numReviews: 12,
  },
];

export default products;
