import { AppButton } from '~/core/components/button';
import { AppStackColumn } from '~/core/components/stacks';

//
//

interface PokemonHomeRetryProps {
  onClick: () => void;
}

export const PokemonHomeRetry = ({ onClick }: PokemonHomeRetryProps) => {
  return (
    <AppStackColumn className="justify-center bg-white p-10 border border-neutral-200 rounded-lg">
      <p className="text-xl font-bold">There something went</p>
      <AppButton variant="primary" onClick={onClick}>
        ↻ Retry again
      </AppButton>
    </AppStackColumn>
  );
};
