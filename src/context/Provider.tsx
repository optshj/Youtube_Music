import ModalProvider from './ModalContext';
import SidebarProvider from './SidebarContext';
import SelectPublicProvider from './SelecPublicContext';
import PlayerProvider from './PlayerbarContext';
import PlayerPageProvider from './PlayerPageContext';

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