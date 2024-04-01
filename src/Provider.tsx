import ModalProvider from './components/context/ModalContext';
import SidebarProvider from './components/context/SidebarContext';
import SelectPublicProvider from './components/context/SelecPublicContext';
import PlayerProvider from './components/context/PlayerContext';
import PlayerPageProvider from './components/context/PlayerPageContext';

function Provider({children}: {children:React.ReactNode}) {
    return(
    <PlayerPageProvider>
      <PlayerProvider>
        <SelectPublicProvider>
          <ModalProvider>
            <SidebarProvider>
                {children}
            </SidebarProvider>
          </ModalProvider>
        </SelectPublicProvider>
      </PlayerProvider>
    </PlayerPageProvider>
    )
}
export default Provider;