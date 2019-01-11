#include"iostream"
#include"stdio.h"

using namespace std;

int main()
{
	int N;
	scanf("%d",&N);
	int n=N;
	int x[N];
	int y[N];
	while(n--)
	{
		cout<<"Hello world "<<n<<" !\n";
		scanf("%d %d",&x[n],&y[n]);
	}
	int slopes[N*(N-1)/2];

	int k=0;
	for(int i=0;i<N;i++)
	{
		for(int j=i+1;j<N;j++)
		{
			for(int k=0;i<N;i++)
			{
				for(int l=i+1;j<N;j++)
				{
					if((y[i]-y[j])*(y[k]-y[l])==(x[i]-x[j])*(x[k]-x[l])*(-1))
						k++;
				}
			}
		}
	}

	cout<<k;

	return 0;
}