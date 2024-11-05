import Footer from "../../Components/footer/Footer"


function AddPost() {
   
    return(
        
        <div><div className="flex justify-between m-12 ">
            <button className="text-2xl bg-blue-900 rounded text-white">next</button>
            <button className="text-2xl bg-blue-900 rounded text-white text-center">new post</button></div>
            
            <div className="w-full h-96 text-center pt-48  bg-red-500"><h1 className="text-center">sorry we have not back end dev for this we cant use your gallery</h1></div>
            <Footer />
            </div>
    )
}

export default AddPost