
void main()
{
    int a=0,b=1,m;
    printf("enter the number \n");
    scanf("%d",&m);
    printf("%d  %d ",a,b);
    for(int i=0;i<=m-2;i++)
    {
        int s;
        s=a+b;
        printf("    %d",s);
        a=b;
        b=s;
    }
   getch();


}
