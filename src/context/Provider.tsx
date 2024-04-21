import ModalProvider from './ModalContext';
import SidebarProvider from './SidebarContext';
import SelectPublicProvider from './SelecPublicContext';
import PlayerProvider from './PlayerbarContext';
import PlayerPageProvider from './PlayerPageContext';
import PlayStateProvider from './PlayStateContext';

function Provider({children}: {children:React.ReactNode}) {
    return(
    <PlayerPageProvider>
      <PlayerProvider>
        <SelectPublicProvider>
          <ModalProvider>
            <SidebarProvider>
              <PlayStateProvider>
                {children}
              </PlayStateProvider>
            </SidebarProvider>
          </ModalProvider>
        </SelectPublicProvider>
      </PlayerProvider>
    </PlayerPageProvider>
    )
}
export default Provider;