class Solution(object):
    def divide(self, dividend, divisor):
        """
        :type dividend: int
        :type divisor: int
        :rtype: int
        """
        ans = 0
        neg = int(math.copysign(1,divisor) * math.copysign(1,dividend))
        dividend = abs(dividend)
        divisor = abs(divisor)
        maxLimit = (2**31)-1
        minLimit = -(2**31)
        
        for i in range(31,-1,-1):
            if(divisor << i <= dividend):
                dividend = dividend - (divisor << i)
                ans += 1 << i
        ans = ans * neg
        if ans >= maxLimit:
            return maxLimit
        elif ans <= minLimit:
            return minLimit
        else:
            return ans