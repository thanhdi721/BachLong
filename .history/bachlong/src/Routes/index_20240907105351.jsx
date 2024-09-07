import MainPage from "../Page/Home/index";
import HomePayLater from "../Page/HomePayLater/index";
import HDSaiSon from "../Page/HDSaiSon/HDSaiSon";
import BuyInInstallments from "../Page/BuyInInstallments/BuyInInstallments";
import Warranty from "../Page/Warranty/Warranty";
import ThreeZeroInstallment from "../Page/ThreeZeroInstallment/ThreeZeroInstallment";
import OpenStore from "../Page/OpenStore/OpenStore.tsx";
export const routes = [
  {
    path: "/",
    page: MainPage,
  },
  {
    path: "/home-pay-later",
    page: HomePayLater,
  },
  {
    path: "/hd-saison",
    page: HDSaiSon,
  },
  {
    path: "/buy-in-installments",
    page: BuyInInstallments,
  },
  {
    path: "/warranty",
    page: Warranty,
  },
  {
    path: "/three-zero-installment",
    page: ThreeZeroInstallment,
  },
  {
    path: "/open-store",
    page: OpenStore,
  },
];
