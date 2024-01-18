export const useResetForm = ( event : React.MouseEvent ) => {
    event?.preventDefault();
    document.querySelectorAll('input').forEach((input) => {
        input.value = '';
    });
}