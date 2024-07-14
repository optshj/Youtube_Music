import SelectPublicProvider from './SelecPublicContext';
import SongDataProvider from './SongDataConetext';
import PlayStateProvider from './PlayStateContext';
import ScrollProvider from './ScrollContext';
import ToggleProvider from './ToggleContext';

export default function Provider({children}: {children:React.ReactNode}) {
    return(
      <SongDataProvider>
        <SelectPublicProvider>
          <PlayStateProvider>
            <ScrollProvider>
              <ToggleProvider>
                {children}
              </ToggleProvider>
            </ScrollProvider>
          </PlayStateProvider>
        </SelectPublicProvider>
      </SongDataProvider>
    )
}