$(document).ready(function () {
    var text = 'I Am Into Web Development'
    var index = 0
    function typeText() {
        $('.h2content').html(text.slice(0, index))
        index++

        if (index > text.length) {
            index = 0
        }
    }
    setInterval(typeText, 100)
    var maxHeight = $('.h2content').height()
    $('.h2content').css('height', maxHeight + 'px')
})

$(document).ready(function () {
    $('.contact').on('input', function () {
        var inputValue = $(this).val()
        var prewrittenText = $(this).siblings('.prewritten-text')

        if (inputValue.trim() === '') {
            prewrittenText.show()
        } else {
            prewrittenText.hide()
        }
    })
})

// Smooth scrolling for anchor links in the header
$(document).ready(function () {
    $('a.headeritems').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault()

            var hash = this.hash
            var targetOffset = $(hash).offset().top

            $('html, body').animate(
                {
                    scrollTop: targetOffset,
                },
                800,
                'swing',
                function () {
                    window.location.hash = hash
                }
            )
        }
    })
})

$(document).ready(function () {
    //Click event to scroll to top
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800)
        return false
    })
})
