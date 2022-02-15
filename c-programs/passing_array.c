#include<stdio.h>

//
// Observer how varaibles are being modified.
// What is the difference between passing integers and
// an array of integers
//
void changeBothNumbers(int a, int b);
void changeAllNumbers(int a[], int size);

int main(void)
{
    int a = 20;
    int b = 30;
    int nums[5] = {1, 2, 3, 4, 5};
    int size = 5;

    printf("Before calling changeBothNumbers():\n");
    printf("a = %d, b = %d\n", a, b);
    changeBothNumbers(a, b);
    printf("Post calling changeBothNumbers():\n");
    printf("a = %d, b = %d\n", a, b);

    printf("Before calling changeAllNumbers():\n");
    for(int i = 0; i < size; i++) {
        printf("%d ", nums[i]);
    }
    printf("\n");
    changeAllNumbers(nums, size);
    printf("Post calling changeAllNumbers():\n");
    for(int i = 0; i < size; i++) {
        printf("%d ", nums[i]);
    }
    printf("\n");

	return 0;
}

void changeBothNumbers(int a, int b) {
    a = a + 10;
    b = b + 10;
}

void changeAllNumbers(int a[], int size) {
    for(int i = 0; i < size; i++) {
        a[i] = a[i] + 10;
    }
}
