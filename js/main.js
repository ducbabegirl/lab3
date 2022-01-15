import Navigo from "navigo";
import HomePage from "./page/home";
import AboutPage from "./page/about";
import ProductPage from "./page/product";
import Header from "./components/header";
import Footer from "./components/footer";
import DetailNewsPage from "./page/detailNews";
import DashBoardPage from "./page/admin/dashboard";
import AddNewsPage from "./page/admin/news/add";
import AdminNewsPage from "./page/admin/news/";
import Signup from "./page/signup";
import NewList from "./components/admin/NewList";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
    "/admin/dashboard": () => {
        print(DashBoardPage.render());
    },
    "/admin/news": () => {
        print(AdminNewsPage.render());
    },
    "/admin/news/add": () => {
        console.log("12");
        print(AddNewsPage.render());
    },
    "/signup": () => {
        print(Signup.render());
    },
    "/admin/newList": () =>{
        print(NewList.render());
    }
});
router.resolve();