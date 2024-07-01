import ModalProvider from './ModalContext';
import SidebarProvider from './SideBarContext';
import SelectPublicProvider from './SelecPublicContext';
import PlayerProvider from './PlayerbarContext';
import PlayerPageProvider from './PlayerPageContext';
import PlayStateProvider from './PlayStateContext';
import ScrollProvider from './ScrollContext';

function Provider({children}: {children:React.ReactNode}) {
    return(
    <PlayerPageProvider>
      <PlayerProvider>
        <SelectPublicProvider>
          <ModalProvider>
            <SidebarProvider>
              <PlayStateProvider>
                <ScrollProvider>
                  {children}
                </ScrollProvider>
              </PlayStateProvider>
            </SidebarProvider>
          </ModalProvider>
        </SelectPublicProvider>
      </PlayerProvider>
    </PlayerPageProvider>
    )
}
export default Provider;