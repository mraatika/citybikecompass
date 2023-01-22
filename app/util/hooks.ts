import { useEffect, useState } from 'react';
import { Observable, share } from 'rxjs';

export const useObservable = <T>(observable$: Observable<T>) => {
  const [value, setValue] = useState<T>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const subscription = observable$
      .pipe(share())
      .subscribe({ next: setValue, error: setError });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { value, error };
};
