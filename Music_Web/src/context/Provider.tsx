import ModalProvider from './ModalContext';
import SidebarProvider from './SideBarContext';
import SelectPublicProvider from './SelecPublicContext';
import PlayerProvider from './PlayerbarContext';
import PlayerPageProvider from './PlayerPageContext';
import PlayStateProvider from './PlayStateContext';
import ScrollProvider from './ScrollContext';
import ToggleProvider from './ToggleContext';

export default function Provider({children}: {children:React.ReactNode}) {
    return(
    <PlayerPageProvider>
      <PlayerProvider>
        <SelectPublicProvider>
          <ModalProvider>
            <SidebarProvider>
              <PlayStateProvider>
                <ScrollProvider>
                  <ToggleProvider>
                  {children}
                  </ToggleProvider>
                </ScrollProvider>
              </PlayStateProvider>
            </SidebarProvider>
          </ModalProvider>
        </SelectPublicProvider>
      </PlayerProvider>
    </PlayerPageProvider>
    )
}