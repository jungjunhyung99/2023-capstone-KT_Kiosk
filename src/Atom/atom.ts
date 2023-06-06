import { atom } from "recoil";

export interface ICafe {
    index: number;
    name: string;
    quantity: number;
}

export interface IMode {
    movie: boolean,
    hamburger: boolean,
    cafe: boolean,
    icecream: boolean,
}


export interface IFastItem{
    id: string | undefined;
    category: string | undefined;
    name: string | undefined;
    cost: number | undefined;
    cal: number | undefined;
    quantity: number;
    img: any;
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
    index: number;
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

export const fastAnswer = atom<any>({
    key: "fastAnswer",
    default: {
        takeout: "",
        beverage: "",
        beverageCount: 0,
        food:"",
        foodCount: 0
    }
});

export const LogInState = atom<boolean>({
    key: "LogInState2",
    default: false
})

export const movieTime = atom<number>({
    key: 'movieTime2',
    default: 0
});

export const hamburgerTime = atom<number>({
    key: 'hamburgerTime2',
    default: 0
});

export const cafeTime = atom<number>({
    key: 'cafeTime2',
    default: 0
});

export const icecreamTime = atom<number>({
    key: 'icecreamTime2',
    default: 0
})

export const movieRecord = atom<any>({
    key: 'movieRecord2',
    default: "",
});

export const hamburgerRecord = atom<any>({
    key: 'hamburgerRecord2',
    default: ""
});

export const cafeRecord = atom<any>({
    key: 'cafeRecord2',
    default: ""
});

export const userIdAtom = atom<any>({
    key: 'userIdAtom2',
    default: ""
});

export const practiceMode = atom<IMode>({
    key: "practiceMode",
    default: {
        movie: false,
        hamburger: false,
        cafe: false,
        icecream: false
    }
});
