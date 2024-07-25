import SongDataProvider from './SongDataConetext';
import PlayStateProvider from './PlayStateContext';
import ScrollProvider from './ScrollContext';
import ToggleProvider from './ToggleContext';
import PlayListProvider from './PlayListContext';

export default function Provider({children}: {children:React.ReactNode}) {
    return(
      <SongDataProvider>
        <PlayStateProvider>
          <ScrollProvider>
            <ToggleProvider>
              <PlayListProvider>
                {children}
              </PlayListProvider>
            </ToggleProvider>
          </ScrollProvider>
        </PlayStateProvider>
      </SongDataProvider>
    )
}