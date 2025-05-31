// jQuery Library
    
$(document).ready(function() {
    // Search functionality
    $('.search-btn').click(function() {
        const searchValue = $('.search-box').val().trim();
        if (searchValue) {
            alert('Mencari: ' + searchValue);
        } else {
            alert('Masukkan kata kunci pencarian');
        }
    });

    // Enter key for search
    $('.search-box').keypress(function(e) {
        if (e.which === 13) { // Enter key
            $('.search-btn').click();
        }
    });

    // Category buttons interaction
    $('.category-btn').click(function() {
        // Remove active state from all buttons
        $('.category-btn').css({
            'background-color': 'white',
            'border-color': '#dee2e6',
            'color': '#495057'
        });
        
        // Add active state to clicked button
        $(this).css({
            'background-color': '#e7f1ff',
            'border-color': '#0d6efd',
            'color': '#0d6efd'
        });
        
        // Simulate category filtering
        console.log('Kategori dipilih:', $(this).text());
    });

    // Product card interactions
    $('.product-card').click(function() {
        const productName = $(this).find('.product-title').text();
        const storeName = $(this).find('.product-subtitle').text();
        alert(`Produk: ${productName}\nToko: ${storeName}`);
    });

    // Product card hover effects
    $('.product-card').hover(
        function() {
            $(this).css({
                'background-color': '#e9ecef',
                'transform': 'translateY(-2px)'
            });
        },
        function() {
            $(this).css({
                'background-color': '#f8f9fa',
                'transform': 'translateY(0)'
            });
        }
    );

    // Hero button interaction
    $('.hero-btn').click(function() {
        alert('Mengarahkan ke halaman pendaftaran UMKM...');
    });

    // Navigation buttons
    $('.nav-btn').click(function() {
        const action = $(this).text().toLowerCase();
        alert(`Mengarahkan ke halaman ${action}...`);
    });

    // Category hover effects
    $('.category-btn').hover(
        function() {
            if ($(this).css('background-color') === 'rgb(255, 255, 255)' || $(this).css('background-color') === 'white') {
                $(this).css({
                    'background-color': '#f8f9fa',
                    'border-color': '#adb5bd'
                });
            }
        },
        function() {
            if ($(this).css('background-color') === 'rgb(248, 249, 250)') {
                $(this).css({
                    'background-color': 'white',
                    'border-color': '#dee2e6'
                });
            }
        }
    );

    // Search box focus effects
    $('.search-box').focus(function() {
        $(this).css({
            'border-color': '#0d6efd',
            'box-shadow': '0 0 0 0.2rem rgba(13, 110, 253, 0.25)'
        });
    }).blur(function() {
        $(this).css({
            'border-color': '#ced4da',
            'box-shadow': 'none'
        });
    });

    // Button hover effects
    $('.search-btn').hover(
        function() {
            $(this).css('background-color', '#0b5ed7');
        },
        function() {
            $(this).css('background-color', '#0d6efd');
        }
    );

    $('.hero-btn').hover(
        function() {
            $(this).css('background-color', '#0b5ed7');
        },
        function() {
            $(this).css('background-color', '#0d6efd');
        }
    );

    $('.nav-btn').hover(
        function() {
            $(this).css('background-color', '#e7f1ff');
        },
        function() {
            $(this).css('background-color', 'white');
        }
    );

    // Logo hover effect
    $('.home-link').hover(
        function() {
            $(this).css('background-color', '#495057');
        },
        function() {
            $(this).css('background-color', '#6c757d');
        }
    );
});
