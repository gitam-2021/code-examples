#include<stdio.h>

// 
// What happens when you 
// change the index variable
// in a for loop?
//
int main(void) {
    int n = 20;
    for ( n = 0; n < 8; n++)
    {
        n = n + 4;
        printf("%d\n", n);
    }
    printf("%d\n", n);
    
    return 0;
}