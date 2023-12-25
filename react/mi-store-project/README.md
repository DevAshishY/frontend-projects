## website url
Admin URL: https://app.netlify.com/sites/AshishMiStore
URL:       https://AshishMiStore.netlify.app
Site ID:   5101c1f3-baad-4182-9b0b-cc6ae5bea0c2









## create react app
``` npx create-react-app ```
. (. use for direct root , or you can put name of project )



## notes 
=> component first letter should captial letter
=> react use className becuase javascript fixed keyword class 
=> label use htmlFor because for for loop
=> after return one div or component or use blank bracket 


//////////////////////////////////////////////////////////////////////
=> css use like javscript variable
## make a object of css propery 
  let colorRed = {
    backgroundColor:"red"    // remove - And after letter captital
    "background-color":"red" // if use css same so property in between "" 
  }

  # use 
  style={colorRed}
# you can pass direct object 
  style={{backgroundColor:"red",padding:"20px"}}
//////////////////////////////////////////////////////////////////////



# jsx 
javascript and html combo

# important extenstion 
ES7 React/Redux/GraphQL/React-Native snippets


# shortcut for snips

rafce :  react-arrow-function-component-export
=> by default export means we use any var when call like this 
     export default nav (on nav.js)
     import Anything  from "./nav"; (on index.js)
     <Anything/>    (on jsx index.js)

=> if not use default so wrap on {}
    export  {Nav}
and use on import 
    import {Nav}  from "./nav";
     <Nav/>


 # if somthing not export default so use this type 

 import banner from "./data/data.json";    // direct propery 


# react router dom for routing

=> npm i react-router-dom
=>  import {Link} from "react-router-dom"
=> and use this type <Link to="/">
=> for routing use router in parent component 
    import {BrowserRouter as router} from "react-router-dom" //app.js


# for slider use bootstrap 
for doucmention 
https://react-bootstrap.github.io/

npm i react-bootstrap 
npm i bootstrap@4.6.0   


# routing 
<router>
 <Routes>
   <Route exact path="/music" element={
   <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}
   />
</Routes>
</Router>


# use state 
const [miPhoneToggle, setMiPhoneToggle] = useState(false);

miPhoneToggle :default value 
useState(false): default value will be false
setMiPhoneToggle: by useing this value we can change default value 
# useEffect

useEffect(() => {
  if(window.location.pathname === "/miphones"){
    setMiPhoneToggle(true);
  }

  setMiPhoneToggle : we are change value true using "setMiPhoneToggle"



     


