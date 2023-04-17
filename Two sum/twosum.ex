defmodule Solution do
  @spec two_sum(nums :: [integer], target :: integer) :: [integer]

  def two_sum(nums, target) do
    keylist = Enum.sort(nums) |> summer(0, Enum.count(nums)-1, target)   #Get which numbers are supposed to add up
    if keylist == 0 do
      "No match found"
    else
      Enum.with_index(nums)
      |> Enum.filter(fn {v,k} -> Enum.member?(keylist,v) == true  end) #Create a map for nums and indexes, filter out based on summer/4
      |> Enum.map(fn {k,v} -> v end)
    end
  end

  def summer(_headtail, headindex, headindex, _) do
    0
  end
  def summer([head|tail], headindex, tailindex, target) do
    value = head+List.last(tail)
    case{value, target} do
      {^target, ^target} -> [head, List.last(tail)]
      {^value, ^target} when value > target -> summer([head|Enum.drop(tail, -1)], headindex, tailindex-1, target) #Remove tail and decrement tailindex
      _-> summer(tail, headindex+1, tailindex, target)       #Remove head and increment headindex
    end
  end
end
