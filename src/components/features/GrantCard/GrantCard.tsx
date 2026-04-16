/**
 * Grant Card Component
 * Example feature component using the design system
 */

import { Grant } from '@/data/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui-system/Card';
import { Button } from '@/components/ui-system/Button';
import { Badge } from '@/components/ui-system/Badge';
import { Bookmark, Calendar, DollarSign, MapPin } from 'lucide-react';

interface GrantCardProps {
  grant: Grant;
  onSave?: (grantId: string) => void;
  onViewDetails?: (grantId: string) => void;
}

export function GrantCard({ grant, onSave, onViewDetails }: GrantCardProps) {
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDeadline = (deadline: string) => {
    const date = new Date(deadline);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusVariant = (status: Grant['status']) => {
    switch (status) {
      case 'open':
        return 'success';
      case 'upcoming':
        return 'info';
      case 'closed':
        return 'neutral';
      case 'rolling':
        return 'brand';
      default:
        return 'neutral';
    }
  };

  return (
    <Card variant="default" padding="md" interactive>
      <CardHeader>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-2">
            <CardTitle>{grant.title}</CardTitle>
            <Badge variant={getStatusVariant(grant.status)} size="sm">
              {grant.status}
            </Badge>
          </div>
          <CardDescription className="text-gray-600 font-medium">
            {grant.funder}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        {/* Match Score */}
        {grant.matchScore && (
          <div className="mb-4 p-3 bg-brand-50 rounded-lg border border-brand-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-brand-700">Match Score</span>
              <span className="text-2xl font-semibold text-brand-700">{grant.matchScore}%</span>
            </div>
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{grant.description}</p>

        {/* Key Info Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* Amount */}
          {grant.amount.min && grant.amount.max && (
            <div className="flex items-start gap-2">
              <DollarSign className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-500">Amount</p>
                <p className="text-sm font-medium text-gray-900">
                  {formatAmount(grant.amount.min)} - {formatAmount(grant.amount.max)}
                </p>
              </div>
            </div>
          )}

          {/* Deadline */}
          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500">Deadline</p>
              <p className="text-sm font-medium text-gray-900">{formatDeadline(grant.deadline)}</p>
            </div>
          </div>

          {/* Location */}
          {grant.geographicFocus.length > 0 && (
            <div className="flex items-start gap-2 col-span-2">
              <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-500">Geographic Focus</p>
                <p className="text-sm font-medium text-gray-900">
                  {grant.geographicFocus.slice(0, 2).join(', ')}
                  {grant.geographicFocus.length > 2 && ` +${grant.geographicFocus.length - 2} more`}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Focus Areas */}
        <div className="flex flex-wrap gap-2">
          {grant.focusAreas.slice(0, 3).map((area, index) => (
            <Badge key={index} variant="neutral" size="sm">
              {area}
            </Badge>
          ))}
          {grant.focusAreas.length > 3 && (
            <Badge variant="neutral" size="sm">
              +{grant.focusAreas.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <Button
          variant={grant.saved ? 'secondary' : 'tertiary'}
          size="md"
          onClick={() => onSave?.(grant.id)}
          icon={<Bookmark className={`w-4 h-4 ${grant.saved ? 'fill-current' : ''}`} />}
          iconPosition="left"
        >
          {grant.saved ? 'Saved' : 'Save'}
        </Button>
        <Button
          variant="primary"
          size="md"
          onClick={() => onViewDetails?.(grant.id)}
          className="flex-1"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
