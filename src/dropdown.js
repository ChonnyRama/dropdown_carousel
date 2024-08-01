const dropdownHandler = () => {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownItems = document.querySelector('[data-dropdown-items]')
    
    dropdownButton.addEventListener("mouseover", ()=>{
        dropdownItems.classList.add('show')
    });

    // dropdownButton.addEventListener("mouseout", ()=>{
    //     dropdownItems.classList.toggle('show')
    // });

    dropdownButton.addEventListener("click", ()=>{
        dropdownItems.classList.toggle('show')
    });
}

export default dropdownHandler;