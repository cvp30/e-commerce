import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllElectronics } from "../../redux/actions";

const Electronics = () => {

  const dispatch = useDispatch();

  const electronics = useSelector(state => state.allElectronics);

  useEffect(() => {
    if(!electronics.length) {
      dispatch(getAllElectronics() )
    }
  }, [])

  return (
    <section>
      
    </section>
  )
}

export default Electronics;