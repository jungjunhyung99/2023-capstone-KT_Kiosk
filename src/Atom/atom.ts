import { atom } from "recoil";

export interface ICafe {
    index: number;
    name: string;
    quantity: number;
}


export interface IFastItem{
    id: string | undefined;
    category: string | undefined;
    name: string | undefined;
    cost: number | undefined;
    cal: number | undefined;
    quantity: number;
}

export interface IAtomFast {
    takeout: string;
    item: IFastItem[];
}

export interface IGetMoives{
    dates:{
      maximum: string;
      minimum: string;
    }
    page: number;
    results: IMovie[];
    total_page: number;
    total_results: number;
  }
  
  
  export interface IMovie {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
    vote_average: number;
  }


export interface IAtomMovie {
    title: string;
    time: string;
    seat: number;
}


export interface IMovieAnswer {
    title: string;
    time: string;
    seat: number;
    num: number;
}

export const movieInfoState = atom<IGetMoives>({
    key: "movieInfoState",
    default: {
        dates:{
            maximum: "",
            minimum: ""
          },
          page: 0,
          results: [],
          total_page: 0,
          total_results: 0,
    }
});

export const CafeAnswer = atom<ICafe[]>({
    key: "cafeAnswer",
    default: [],
});

export const movieObj = atom<IAtomMovie>({
    key: "movieState",
    default: {
        title: 'm',
        time: '',
        seat: 0,
    },
});

export const movieAnswer = atom<IMovieAnswer>({
    key: "moiveAnswer",
    default: {
        title: 'm',
        time: '',
        seat: 0,
        num: 0,
    },
})

export interface IAtomCafe {
    name: string;
    quantity: number;
}

export const cafeObj = atom<IAtomCafe[]>({
    key: "cafeState",
    default: [],
}) 


export const fastObj = atom<IAtomFast>({
    key: "fastState",
    default: {takeout:"",item:[]},
});

export const fastAnswer = atom<IAtomFast>({
    key: "fastAnswer",
    default: {
        takeout: "",
        item: [],
    }
});