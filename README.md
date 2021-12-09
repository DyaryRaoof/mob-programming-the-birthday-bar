# mob-programming-the-birthday-bar


# link to the problem: 
https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true


# Solution explained:
so we are given the values s which is the array of integers on the chocolate bar, d which is the birth DAY, and m which is the birth MONTH;

the idea is this : 
Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

- The length of the segment matches Ron's birth month, and,
- The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.

the soution would be:

I iterate over the array tow times.
first over the length of the array (s.length) then for each item in the array create aother iteration to equal less than the number of months m because it the length of the chocolate bars required.
and I use a sum = 0 before each of this second iteration. then sum += s[i + x] inside the second iteration. so sum of the item in the in postion i + x. this is summed up with the previous sum in the next iteration ( this is to get the total sum of first item plus the next m number of items).
then i check if the sum of items (sum) is equal to the day of birth d. if so add 1 to numOfWays (number of ways the chocolate bar can be devided) else do nothing. and return numOfWays;
