import { ErrorToast } from '@/components/ui/v2/ErrorToast';
import { getToastStyleProps } from '@/utils/constants/settings';
import { toast } from 'react-hot-toast';

export default async function execPromiseWithErrorToast(
  call: () => Promise<any>,
  {
    loadingMessage,
    successMessage,
    errorMessage,
    onError,
  }: {
    loadingMessage: string;
    successMessage: string;
    errorMessage: string;
    onError?: (error: Error) => void;
  },
) {
  let loadingToastId: string | null = null;

  const toastStyle = getToastStyleProps();

  try {
    loadingToastId = toast.loading(loadingMessage, {
      style: toastStyle.style,
      ...toastStyle.success,
    });

    const result = await call();

    toast.dismiss(loadingToastId);
    toast.success(successMessage, {
      style: toastStyle.style,
      ...toastStyle.success,
    });

    return result;
  } catch (error) {
    if (loadingToastId) {
      toast.dismiss(loadingToastId);
    }

    onError?.(error);

    toast.custom(
      (t) => (
        <ErrorToast
          isVisible={t.visible}
          errorMessage={errorMessage}
          error={error}
          close={() => toast.dismiss()}
        />
      ),
      {
        duration: Number.POSITIVE_INFINITY,
      },
    );

    return null;
  }
}
