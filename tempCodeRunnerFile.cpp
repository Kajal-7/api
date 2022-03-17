#include<stdio.h>
#include<stdlib.h>
#include<string.h>
void Menu ()
{
  printf ("****");
  printf ("\nChoices List:");
  printf ("\nCase 1:To read the specified file in buffer.");
  printf ("\nCase 2:To print the content of buffer.");
  printf ("\nCase 3:To print the specified line from buffer.");
  printf ("\nCase 4:To print the line containing the specified word.");
  printf ("\nCase 5:To delete the line containing the specified word.");
  printf ("\nCase 6:To replace the word1 with word2.");
  printf ("\nCase 7:To undo the last operation.");
  printf ("\nCase 8:To save the buffer's content in a file.");
  printf ("\nCase 9:To quit.");
  printf ("\n");
}

struct Node
{
  int line_number;
  struct Node *next;
  struct Node *prev;
  char contain[1000];
} *head;
int
main ()
{
    int undo_line_number;
    int q=0;
    char undo[100];
    int save=0;
    int prev_choice;
     FILE *fp1;
    int stringLen,subLen,newLen;
int a=0,b,c;
int flag=0,start,end;
    char string[100],sub[100],new_str[100];
  int line_num;
  int temp_number = 0;
  int k = 0;
  int word_length;
  char word_search[100];
  int j = 0;
  int l=0;
  int line_input;
  int line = 1;
  struct Node *newNode, *temp;
  head = (struct Node *) malloc (sizeof (struct Node));
  head->next = NULL;
  head->prev = NULL;
  head->line_number = line;
  char ch;
  FILE *fp;
  fp = fopen ("file.txt", "r");
  int choice;
  do
    {
      Menu ();
      printf ("Enter choice:");
      scanf ("%d", &choice);
      switch (choice)
	{
	case 1:
	  temp = head;
	  int i = 0;
	  while ((ch = fgetc (fp)) != EOF)
	    {
	      if (ch != '\n')
		{
		  temp->contain[i] = ch;
		  i++;
		}
	      else if (ch == '\n')
		{
		  i = 0;
		  newNode = (struct Node *) malloc (sizeof (struct Node));
		  newNode->next = NULL;
		  newNode->prev = temp;
		  line++;
		  newNode->line_number = line;
		  temp->next = newNode;
		  temp = newNode;
		}
	    }
	  printf ("\nFile Read Successfully.\n");
	  prev_choice=choice;
	  save=0;
	  break;
	case 2:
	  temp = head;
	  i = 0;
	  int j = 0;
	  while (temp != NULL)
	    {
	      j = 0;
	      while (temp->contain[j] != '\0')
		{
		  printf ("%c", temp->contain[j]);
		  j++;
		}
	      printf ("\n");
	      temp = temp->next;
	    }
	    prev_choice=choice;
	    save=0;
	  break;
	case 3:
	  printf ("\nEnter line number to view:");
	  scanf ("%d", &line_input);
	  temp = head;
	  while (temp != NULL)
	    {
	      j = 0;
	      if (temp->line_number == line_input)
		{
		  while (temp->contain[j] != '\0')
		    {
		      printf ("%c", temp->contain[j]);
		      j++;
		    }
		  printf ("\n");
		}
	      temp = temp->next;
	    }
	    prev_choice=choice;
	    save=0;
	  break;
	case 4:
	  printf ("\nEnter word to search:");
	  scanf ("%s", word_search);
	  word_length = strlen (word_search);
	  temp = head;
	  while (temp != NULL)
	    {
	      j = 0;
	      while (temp->contain[j] != '\0')
		{
		  if (temp->contain[j] == '\t'
		      || temp->contain[j] != word_search[k])
		    {
		      k = 0;
		    }
		  if (temp->contain[j] == word_search[k])
		    {
		      temp_number++;
		      k++;
		    }
		  if (temp_number == word_length)
		    {
		      printf ("\nWord %s is present in line %d\n",
			      word_search, temp->line_number);
		      temp_number = 0;
		    }
		  j++;
		}
	      temp = temp->next;
	    }
	  j = 0;
	  temp_number = 0;
	  k = 0;
	  prev_choice=choice;
	  save=0;
	  break;
	case 5:
	  printf ("\nEnter word to search:");
	  scanf ("%s", word_search);
	  word_length = strlen (word_search);
	  temp = head;
	  while (temp != NULL)
	    {
	      j = 0;
	      while (temp->contain[j] != '\0')
		{
		  if (temp->contain[j] == '\t'
		      || temp->contain[j] != word_search[k])
		    {
		      k = 0;
		    }
		  if (temp->contain[j] == word_search[k])
		    {
		      temp_number++;
		      k++;
		    }
		  if (temp_number == word_length)
		    {
		        undo_line_number=temp->line_number;
		      if (temp->line_number == line)
			{
			  printf
			    ("\nLine with word %s is last line and deleted successfully.",
			     word_search);
			  temp->prev->next = NULL;
			  free (temp);
			}
		      else if (temp->line_number != line)
			{
			  printf
			    ("\nLine with word %s is deleted successfully.",
			     word_search);
			  temp->prev->next = temp->next;
			  while(temp->contain[q]!='\0'){
			      undo[q]=temp->contain[q];
			      q++;
			  }
			  free (temp);
			}
		      temp_number = 0;
		    }
		  j++;
		}
	      temp = temp->next;
	    }
	    prev_choice=choice;
	    save=0;
	  break;
	case 6:
	  printf ("\nEnter word to search:");
	  scanf ("%s", word_search);
	  word_length = strlen (word_search);
	  temp = head;
	  while (temp != NULL)
	    {
	      j = 0;
	      while (temp->contain[j] != '\0')
		{
		  if (temp->contain[j] == '\t'
		      || temp->contain[j] != word_search[k])
		    {
		      k = 0;
		    }
		  if (temp->contain[j] == word_search[k])
		    {
		      temp_number++;
		      k++;
		    }
		  if (temp_number == word_length)
		    {
		      for(int z=0;temp->contain[z]!='\0';z++){
		          string[z]=temp->contain[z];
		      }
		      strcpy(sub,word_search);
              printf("\nEnter the new word: ");
              scanf("%s",new_str);
              stringLen=strlen(string);
subLen=strlen(sub);
newLen=strlen(new_str);

for(a=0;a<stringLen;a++)
{
flag=0;
start=a;
for(b=0;string[a]==sub[b];b++,a++)
if(b==subLen-1)
flag=1;
end=a;
if(flag==0)
a-=b;
else
{
for(b=start;b<end;b++)
{
for(c=start;c<stringLen;c++)
string[c]=string[c+1];
stringLen--;
a--;
}

for(b=start;b<start+newLen;b++)
{
for(c=stringLen;c>=b;c--)
string[c+1]=string[c];
string[b]=new_str[b-start];
stringLen++;
a++;
}
}
}
for(int z=0;string[z]!=0;z++){
    temp->contain[z]=string[z];
}
		      temp_number = 0;
		    }
		  j++;
		}
	      temp = temp->next;
	    }
	  j = 0;
	  temp_number = 0;
	  k = 0;
	  prev_choice=choice;
	  save=0;
	  break;
	case 8:
	  fp1=fopen("file.txt","w");
	  temp=head;
	  while(temp!=NULL){
	      j=0;
	      while(temp->contain[j]!='\0'){
	          fputc(temp->contain[j],fp1);
	          j++;
	      }
	      if(temp->contain[j]=='\0'){
	          fputc('\n',fp1);
	      }
	      temp=temp->next;
	  }
	  printf("\nFile saved successfully");
	  fclose(fp);
	  fclose(fp1);
	  prev_choice=choice;
	  save=1;
	  break;
	case 9:
	  break;
	}
}while (choice != 9);
return 0;
}

