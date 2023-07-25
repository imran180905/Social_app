import Layout from "./Layout";
import Posts from "./Posts";
const HomePage = () => {
    return ( <Layout>
        <div className="grid grid-cols-3 gap-8">
            <div></div>
            <div>
                <Posts/>
                <Posts/>
                <Posts/>
            
            </div>
            <div>
                sidecontents
            </div>
        </div>
    </Layout> );
}
 
export default HomePage;