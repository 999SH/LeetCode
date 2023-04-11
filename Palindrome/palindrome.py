class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False

        if x == 0: 
            return True
  
        number = list(map(int, str(x))) #Map int to list
        counter = len(number)
        start = 0

        for integer in range((counter//2)+1):
            if number[start] == number[counter-1]: #Traverse number from front and back
                counter -= 1
                start += 1

            else:
                return False
                
        return True #If it hasnt broken out it is true