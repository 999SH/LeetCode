class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        k = 0
        new = nums
        k = new.count(val)
        for i in range(k):
            new.remove(val)

        
        print(new)
        nums[:] = new
        print(nums)
        return k