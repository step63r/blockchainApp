/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  Conduit,
  ConduitInterface,
} from "../../../../seaport/contracts/conduit/Conduit";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BadReturnValueFromERC20OnTransfer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "channel",
        type: "address",
      },
    ],
    name: "ChannelClosed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "channel",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isOpen",
        type: "bool",
      },
    ],
    name: "ChannelStatusAlreadySet",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "identifiers",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "ERC1155BatchTransferGenericFailure",
    type: "error",
  },
  {
    inputs: [],
    name: "Invalid1155BatchTransferEncoding",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidController",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "InvalidERC721TransferAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidItemType",
    type: "error",
  },
  {
    inputs: [],
    name: "MissingItemAmount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "NoContract",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "identifier",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenTransferGenericFailure",
    type: "error",
  },
  {
    inputs: [],
    name: "UnusedItemParameters",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "channel",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "open",
        type: "bool",
      },
    ],
    name: "ChannelUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum ConduitItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct ConduitTransfer[]",
        name: "transfers",
        type: "tuple[]",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
        ],
        internalType: "struct ConduitBatch1155Transfer[]",
        name: "batchTransfers",
        type: "tuple[]",
      },
    ],
    name: "executeBatch1155",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum ConduitItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct ConduitTransfer[]",
        name: "standardTransfers",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
        ],
        internalType: "struct ConduitBatch1155Transfer[]",
        name: "batchTransfers",
        type: "tuple[]",
      },
    ],
    name: "executeWithBatch1155",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "channel",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isOpen",
        type: "bool",
      },
    ],
    name: "updateChannel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b5033608052608051610a9e61003060003960006101e90152610a9e6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634ce34aa214610051578063899e104c146100815780638df25d9214610094578063c4e8fcb5146100a7575b600080fd5b61006461005f366004610878565b6100bc565b6040516001600160e01b0319909116815260200160405180910390f35b61006461008f3660046108ff565b61012b565b6100646100a236600461096b565b61019b565b6100ba6100b53660046109bd565b6101de565b005b60003360005260006020526040600020546100e6576349ed56f960e11b6000523360045260246000fd5b8160005b8181101561011a57610112858583818110610107576101076109f9565b905060c002016102dd565b6001016100ea565b50632671a55160e11b949350505050565b6000336000526000602052604060002054610155576349ed56f960e11b6000523360045260246000fd5b8360005b8181101561017e57610176878783818110610107576101076109f9565b600101610159565b50610189848461044f565b50632267841360e21b95945050505050565b60003360005260006020526040600020546101c5576349ed56f960e11b6000523360045260246000fd5b6101cf838361044f565b506346f92ec960e11b92915050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610227576040516336abb4df60e11b815260040160405180910390fd5b6001600160a01b03821660009081526020819052604090205481151560ff909116151503610280576040516349271a0f60e11b81526001600160a01b038316600482015281151560248201526044015b60405180910390fd5b6001600160a01b03821660008181526020818152604091829020805460ff191685151590811790915591519182527fae63067d43ac07563b7eb8db6595635fc77f1578a2a5ea06ba91b63e2afa37e2910160405180910390a25050565b60016102ec6020830183610a25565b60038111156102fd576102fd610a0f565b036103425761033f6103156040830160208401610a4d565b6103256060840160408501610a4d565b6103356080850160608601610a4d565b8460a00135610590565b50565b60026103516020830183610a25565b600381111561036257610362610a0f565b036103cf578060a00135600114610392576040516369f9582760e01b815260a08201356004820152602401610277565b61033f6103a56040830160208401610a4d565b6103b56060840160408501610a4d565b6103c56080850160608601610a4d565b846080013561068f565b60036103de6020830183610a25565b60038111156103ef576103ef610a0f565b036104365761033f6104076040830160208401610a4d565b6104176060840160408501610a4d565b6104276080850160608601610a4d565b84608001358560a0013561074c565b604051631e4cbc7f60e21b815260040160405180910390fd5b808280631759616b60e11b60205260005b8381101561058357823582018035803b61048657635f15d672600052806020526024601cfd5b60a08201358060051b60c0018060808501351460a0606086013514168185013583141615905080156104c357633ae8821360e21b60005260046000fd5b506020860195506080602084016024378060061b60400190508060a00160a45260008160c401528060c4018160a0850160c4376000808260206000875af1935083610574573d1561055257601f3d0160051c91508060051c826003028184111561053a578184036003028280028580020360091c01015b5a60208201101561054f573d6000803e3d6000fd5b50505b6357e222f160e11b6000528260045260c0606452608451602001608452806000fd5b50505050600181019050610460565b5050505060806040525050565b6040516323b872dd60e01b600052836004528260245281604452602060006064600080895af1803d15601f3d116001600051141617163d1515811661067f5780873b15151661067f578061066d578161064f573d1561062c57601f3d0160051c8360051c8160030281831115610613578183036003028280028480020360091c01015b5a602082011015610628573d6000803e3d6000fd5b5050505b63f486bc8760005286602052856040528460605260006080528360a05260a4601cfd5b6398891923600052866020528560405284606052836080526084601cfd5b635f15d672600052866020526024601cfd5b5050604052505060006060525050565b833b6106a757635f15d672600052836020526024601cfd5b6040516323b872dd60e01b6000528360045282602452816044526000806064600080895af18061073d573d1561071a57601f3d0160051c8260051c8160030281831115610701578183036003028280028480020360091c01015b5a602082011015610716573d6000803e3d6000fd5b5050505b63f486bc8760005285602052846040528360605282608052600160a05260a4601cfd5b50604052505060006060525050565b843b61076457635f15d672600052846020526024601cfd5b60405160805160a05160c051637921219560e11b6000528760045286602452856044528460645260a0608452600060a45260008060c46000808d5af180610810573d156107ee57601f3d0160051c8560051c81600302818311156107d5578183036003028280028480020360091c01015b5a6020820110156107ea573d6000803e3d6000fd5b5050505b63f486bc87600052896020528860405287606052866080528560a05260a4601cfd5b5060809290925260a05260c05260405250506000606052505050565b60008083601f84011261083e57600080fd5b50813567ffffffffffffffff81111561085657600080fd5b60208301915083602060c08302850101111561087157600080fd5b9250929050565b6000806020838503121561088b57600080fd5b823567ffffffffffffffff8111156108a257600080fd5b6108ae8582860161082c565b90969095509350505050565b60008083601f8401126108cc57600080fd5b50813567ffffffffffffffff8111156108e457600080fd5b6020830191508360208260051b850101111561087157600080fd5b6000806000806040858703121561091557600080fd5b843567ffffffffffffffff8082111561092d57600080fd5b6109398883890161082c565b9096509450602087013591508082111561095257600080fd5b5061095f878288016108ba565b95989497509550505050565b6000806020838503121561097e57600080fd5b823567ffffffffffffffff81111561099557600080fd5b6108ae858286016108ba565b80356001600160a01b03811681146109b857600080fd5b919050565b600080604083850312156109d057600080fd5b6109d9836109a1565b9150602083013580151581146109ee57600080fd5b809150509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b600060208284031215610a3757600080fd5b813560048110610a4657600080fd5b9392505050565b600060208284031215610a5f57600080fd5b610a46826109a156fea2646970667358221220a202e3e5f4800664245dad19a559f048eb36af55d167710452f04a0ab3d4c20364736f6c63430008130033";

type ConduitConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConduitConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Conduit__factory extends ContractFactory {
  constructor(...args: ConduitConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Conduit & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Conduit__factory {
    return super.connect(runner) as Conduit__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConduitInterface {
    return new Interface(_abi) as ConduitInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Conduit {
    return new Contract(address, _abi, runner) as unknown as Conduit;
  }
}
