import SelectPublicProvider from './SelecPublicContext';
import PlayerProvider from './PlayerbarContext';
import PlayStateProvider from './PlayStateContext';
import ScrollProvider from './ScrollContext';
import ToggleProvider from './ToggleContext';

export default function Provider({children}: {children:React.ReactNode}) {
    return(
      <PlayerProvider>
        <SelectPublicProvider>
          <PlayStateProvider>
            <ScrollProvider>
              <ToggleProvider>
              {children}
              </ToggleProvider>
            </ScrollProvider>
          </PlayStateProvider>
        </SelectPublicProvider>
      </PlayerProvider>
    )
}