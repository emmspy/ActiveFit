import Logo from '@/assets/Logo.png'
import Link from './Link';

type Props = {
    selectedPage: string;
    setSelectedPage: (value: string) => void;
};

const Navbar = ( {selectedPage, setSelectedPage}: Props) => {
    //constante para flex
    const flexBetween = "flex items-center justify-between";

  return (
   <nav>
    <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
                {/*Logo*/}
                <img src={Logo} alt="" className='w-16' />

                {/*menu y login*/}
                <div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link 
                            page="Home" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page='Categorias'
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page='Eventos'
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                    <div className={`${flexBetween} gap-8`}>
                        <p>Sing In</p>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </nav>
  )
}

export default Navbar
