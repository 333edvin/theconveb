import { BsFillPeopleFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { GrDeploy } from "react-icons/gr"
import Letters from "../components/Transitions/Letters";
import Zoomout from "../components/Transitions/Zoomout";
function Process() {
  return (
    <div className=" mx-auto p-10 bg-slate-900 py-20">
        <Zoomout>
        <h1 className='text-cyan-400 text-center text-3xl md:text-5xl font-bold mb-10'>The Process</h1>
        </Zoomout>
        
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto px-5 md:px-20 my-5  gap-8 md:gap-20 text-center text-slate-400">
            <div>
                <div className="flex items-center justify-center gap-3 text-cyan-100">
                <BsFillPeopleFill/>
                <h3 className='font-bold text-xl md:text-2xl'>
                    <Letters text="Meet"/>
                    </h3>
                </div>
                <p className='text-sm'>We connect with you to understand your vision and goals, starting our collaboration.
                </p>
            </div>
            <div>
                <div className="flex items-center justify-center gap-3 text-cyan-100">
                <FaPen/>
                <h3 className='font-bold text-xl md:text-2xl'>
                <Letters text="Design"/>
                    </h3>
                </div>
                <p className='text-sm'>Our team creates a visually stunning and user-friendly interface, tailoring it to your needs.
                </p>
            </div>
            <div>
                <div className="flex items-center justify-center gap-3 text-cyan-100">
                <BsStack/>
                <h3 className='font-bold text-xl md:text-2xl'>
                <Letters text="Development"/>
                    </h3>
                </div>
                <p className='text-sm'>We build a robust and scalable solution, writing clean and efficient code.
                </p>
            </div>
            <div>
                <div className="flex items-center justify-center gap-3 text-cyan-100">
                <GrDeploy/>
                <h3 className='font-bold text-xl md:text-2xl'>
                <Letters text="Deploy"/>
                    </h3>
                </div>
                <p className='text-sm'>We launch your website or application, ensuring a smooth transition to production.</p>
            </div>
           
        </div>
    </div>
  )
}

export default Process