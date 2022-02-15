#include<stdio.h>

//
// Observer how characters are 
// stored in the array
// to represent a string
// see how the output effects with 
// '\0' and starting address
// passed to printf function
//

void stringMagic();

int main(void)
{
    stringMagic();
	return 0;
}

void stringMagic() {
    char college[] = "Gitam University";
    college[5] = '\0';
    printf("College name is %s.\n", college);
    printf("%s\n", &college[3]);
    printf("%s\n", &college[8]);
}