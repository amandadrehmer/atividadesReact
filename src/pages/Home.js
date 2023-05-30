import Divs from "../components/Divs/Divs"
import Menu from "../components/Menu/Menu"


function Home(promps){

    return(
        <main>
            <Menu/>
            <section class="painel-de-videos">
                <Divs 
                titulo={"Video 1"}
                link={"https://picsum.photos/400/400?a=1"}
                item={promps.reproduz}/>
            </section>
        </main>
    )
}

export default Home