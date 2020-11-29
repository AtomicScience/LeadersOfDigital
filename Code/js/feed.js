$('.list-line').each(function() {
    
    $($(this).children()).each(function(i) {

        let limitCharQuantity = 0
        
        switch(i) {
            case 0 : 
                limitCharQuantity = 4
                break   
            case 1 : 
                limitCharQuantity = 20
                break
            case 2 : 
                limitCharQuantity = 20
                break
            case 3 : 
                limitCharQuantity = 15
                break
            case 4 : 
                limitCharQuantity = 10
                break
            case 5 : 
                limitCharQuantity = 4
                break
        }

        const text = $(this).text()
        console.log(text + '  ' + limitCharQuantity)
        if (text.length > limitCharQuantity) {
            $(this).text(text.substr(0, limitCharQuantity) + '...')
        }
    })
})
