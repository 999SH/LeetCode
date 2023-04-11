
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        newnums = []
        k = 0

        for number in nums:
            if number not in newnums:
                newnums.append(number)
                k += 1
        
        nums[:] = newnums
        return k


        