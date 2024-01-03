const useDocumentSetter=()=>{
    const documentDarkSetter=()=>{
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
       }
       return [documentDarkSetter]
}
export default useDocumentSetter;